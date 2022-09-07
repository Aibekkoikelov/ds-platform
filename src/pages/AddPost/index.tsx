import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';

import { useNavigate, useParams } from 'react-router-dom';
import 'easymde/dist/easymde.min.css';
import styles from './AddPost.module.scss';
import { Link } from 'react-router-dom';

import axios from '../../axios';
import { useGetAuthMeQuery } from '../../redux/api/getAuthMe';
import { useAddImageMutation } from '../../redux/api/postImgFileApi';
import CircularIndeterminate from '../../components/UI/Loader/Loader';
import { useResourseMutation } from '../../redux/api/postResourceApi';
import { usePatchIdPostMutation } from '../../redux/api/patchIdPost';

const AddPost: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);
  const inputFileRef = React.useRef<MutableRefObject<null>>(null);

  // TODO: SEARCH CASTOM LOADING && EDIT LOADING RTK QUERY
  const [isLoading, setIsLoading] = React.useState(false);

  const [text, setText] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [tags, setTags] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');

  const [addImage, { isLoading: isUpdating, isError: error, data }] = useAddImageMutation();
  const [addResourse, { isLoading: isLoad, isError, data: resourse }] = useResourseMutation();
  const [editPost, { isLoading: load, isError: err, data: edit }] = usePatchIdPostMutation();

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  const onClickRemoveImage = () => {
    setImageUrl('');
  };

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      await addImage({ formData });
    } catch (err) {
      console.warn(err);
      alert('Ошибка при загрузке файла');
    }
  };

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const fields = {
        title,
        imageUrl,
        tags,
        text,
      };

      const { data } = isEditing ? await editPost({ id, fields }) : await addResourse({ fields });

      const _id = isEditing ? id : data._id;
      navigate(`/posts/${_id}`);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при созданий статьи!');
    }
  };

  React.useEffect(() => {
    if (data) {
      setImageUrl(data.url);
    }
  }, [data]);

  //TODO: Translate RTK QUERY
  React.useEffect(() => {
    if (id) {
      axios
        .get(`posts/${id}`)
        .then(({ data }) => {
          setTitle(data.title);
          setText(data.text);
          setImageUrl(data.imageUrl);
          setTags(data.tags.join(','));
        })
        .catch((err) => {
          console.warn(err);
          alert('Ошибка при редактирование статьи');
        });
    }
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <h2>{isEditing ? 'Редактирование cтатьи' : 'Создание статьи'} </h2>
      </div>
      <Paper style={{ padding: 30 }}>
        <Button onClick={() => inputFileRef.current.click()} variant="outlined" size="large">
          Загрузить превью
        </Button>
        <br />
        <br />
        {isUpdating ? <CircularIndeterminate /> : null}

        <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />

        {imageUrl ? (
          <>
            <Button variant="contained" color="error" onClick={onClickRemoveImage}>
              Удалить
            </Button>
            <br />
            <br />

            <img className={styles.image} src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
          </>
        ) : null}

        <br />
        <br />
        <TextField
          classes={{ root: styles.title }}
          variant="standard"
          placeholder="Заголовок статьи..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <TextField
          classes={{ root: styles.tags }}
          variant="standard"
          placeholder="Тэги"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          fullWidth
        />

        <SimpleMDE className={styles.editor} value={text} onChange={onChange} options={options} />

        <div className={styles.buttons}>
          <Button onClick={onSubmit} size="large" variant="contained">
            {isEditing ? 'Сохранить' : 'Опубликовать'}
          </Button>
          <Link to="/">
            <Button size="large">Отмена</Button>
          </Link>
        </div>
      </Paper>
    </>
  );
};

export default AddPost;
