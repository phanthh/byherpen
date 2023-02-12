import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, NodeData } from "@contentful/rich-text-types";
import { Container } from "shared/components/elements";
import { TPostContent } from "shared/types/types";
import styled from "styled-components";
import PostBodyAsset from "../PostBodyAsset";

type PostBodyProps = {
  content: TPostContent;
};

const renderOptions = (content: TPostContent) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: NodeData) => (
      <PostBodyAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
  },
});

const PostBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <PostContainer>
      {documentToReactComponents(content.json, renderOptions(content))}
    </PostContainer>
  );
};

const PostContainer = styled(Container).attrs({
  as: "article",
})`
`;

export default PostBody;
