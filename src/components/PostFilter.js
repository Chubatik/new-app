import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput placeholder='Search...'
                     value={filter.query}
                     onChange={e => setFilter({...filter, query: e.target.value})}/>

            <MySelect defaultValue={'Sort by'}
                      value={filter.sort}
                      options={[
                          {value: 'title', name: 'title'},
                          {value: 'body', name: 'body'}
                      ]}
                      onChange={selectedSort => setFilter({...filter, sort: selectedSort})}/>
        </div>
    );
};

export default PostFilter;
