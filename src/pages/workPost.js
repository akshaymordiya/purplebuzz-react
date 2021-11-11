import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import HeroSection from './layouts/work/heroSection';
import PostDetails from './layouts/work/postDetails';
import RelatedPosts from './layouts/work/relatedPosts';

const WorkPost = () => {
    const { id } = useParams();
    const posts = useSelector(state => state.work.workPosts);
    const post = posts.find(post => post.id === parseInt(id));
    const postDetails = useSelector(state => state.posts.postDetails)
    const selectedPostDetails = postDetails.find(post => post.postId === parseInt(id));

    const displayRelatedPosts = useMemo(() => {
        const relatedPosts = [];
        for (let i = 0; i < 3; i++) {
            if(!relatedPosts.length){
                const element = posts[Math.floor(Math.random() * posts.length)];
                relatedPosts.push(element);
            }else{
                let runningLoop = true;
                while (runningLoop) {
                    const post = posts[Math.floor(Math.random() * posts.length)];
                    const findDuplicate = relatedPosts.find(p => p.id === parseInt(post.id));
                    if(!findDuplicate){
                        relatedPosts.push(post)
                        runningLoop = false;
                    }else{
                        runningLoop= true;
                    }
                }
            }
        }
        return relatedPosts;
    }, [id])

    return (
        <>
            <HeroSection 
                title={post.title}
                excerpt={post.excerpt}
                description={post.description}
            />
            <PostDetails postDetails={selectedPostDetails} />
            <RelatedPosts relatedPosts={displayRelatedPosts} />
        </>
    );
}

export default WorkPost;
