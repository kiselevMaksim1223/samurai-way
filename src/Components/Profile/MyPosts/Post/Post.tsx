import React from "react";
import s from "./Post.module.css"

type postPropsType = {
    postContent: string
}

const Post = (props: postPropsType) => {
    return (
        <div className={s.item}>
            <img
                alt={"ХУЙ"}
                src="https://sun9-31.userapi.com/impg/4rSBkehJY0bSTA8v66DxIS0XJyJQC_NNDYIxUw/ejwgPpbvmHw.jpg?size=1803x1887&quality=96&sign=06a791a15243c304698be683d5a97939&c_uniq_tag=cvJeH0d0Ea1RMtu0xznMDSSKu6T8Q9t407KKrYzveJk&type=album"
            />
            <div>
                <span>{props.postContent}</span>
            </div>
        </div>
    )

}

export default Post;

