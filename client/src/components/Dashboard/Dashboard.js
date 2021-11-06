import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

import { useHistory, useLocation } from 'react-router-dom';

import { getPostsBySearch } from '../../actions/posts';
import { ButtonElement } from '../PageStyles/Button';
import { FormInput, FormLayout, FormTitle } from '../PageStyles/Forms';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Dashboard = () => {

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const history = useHistory();

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);
  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
    <>
      <Posts setCurrentId={setCurrentId} />
      <div>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <FormLayout>
        <FormTitle className="m-5">Search post</FormTitle>
        <FormInput
          // value={tags}
          onAdd={(chip) => handleAddChip(chip)}
          onDelete={(chip) => handleDeleteChip(chip)}
          placeholder="Search Tags"
          variant="outlined"
        />
        <ButtonElement onClick={searchPost} variant="contained" color="primary">Search</ButtonElement>
      </FormLayout>
      </div>
    </>
  )
}

export default Dashboard;