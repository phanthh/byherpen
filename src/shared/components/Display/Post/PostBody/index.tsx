import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import RichTextAsset from "../../RichTextAsset";
import markdownStyles from "./markdown-styles.module.css";

type PostBodyProps = {
  content: Document;
};

const PostBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles["markdown"]}>
        {documentToReactComponents(content.json, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
              <RichTextAsset
                id={node.data.target.sys.id}
                assets={content.links.assets.block}
              />
            ),
          },
        })}
      </div>
    </div>
  );
};

export default PostBody;
