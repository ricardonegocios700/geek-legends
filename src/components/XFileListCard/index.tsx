import XFileCard from "../XFileCard";
import { useXFile } from "../../Providers/xfile/index";

interface XFileTypes {
    title: string;
    text: string;
    userId: number;
    id?: number;
    date: string;
}

const XFileListCard = () => {
    const { allPosts } = useXFile();

    return (
        <>
            {allPosts[0] &&
                allPosts.map((posts: XFileTypes) => (
                    <div key={posts.id}>
                        <XFileCard
                            title={posts.title}
                            text={posts.text}
                            date={posts.date}
                            id={posts.id || 0}
                        />
                    </div>
                ))}
        </>
    );
};

export default XFileListCard;
