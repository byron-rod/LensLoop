import PostForm from "@/components/ui/forms/PostForm";
import addPost from "/public/assets/icons/add-post.svg";

const CreatePost = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img src={addPost} alt="add post icon" width={36} height={36} />
          <h2 className="h3-bold md:h2-bold text-left w-full">Create Post</h2>
        </div>
        <PostForm action="Create" />
      </div>
    </div>
  );
};

export default CreatePost;
