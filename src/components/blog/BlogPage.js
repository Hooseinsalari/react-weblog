import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPage = () => {
    const {slug} = useParams()
    console.log(slug);

    return (
        <div>
            BlogPage
        </div>
    );
};

export default BlogPage;