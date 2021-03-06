const Subscription = {
    comment: {
        subscribe: (parent, { postId }, { db, pubsub }, info) => {
            const post = db.posts.find(p => p.id === +postId);
            if (post) {
                return pubsub.asyncIterator(`comment ${postId}`);
            } else {
                throw new Error('Post not found')
            }
        }
    },
    post: {
        subscribe: (parent, args, { pubsub }, info) => pubsub.asyncIterator('post')
    }
}

export default Subscription;
