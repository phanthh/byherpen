import { Block } from "@contentful/rich-text-types";
import { Img, ImgContainer } from "shared/components/elements";
import styled from "styled-components";

type PostBodyAssetProps = {
  id: string;
  assets: Block;
};

const PostBodyAsset: React.FC<PostBodyAssetProps> = ({ id, assets }) => {
  //@ts-ignore
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.url) {
    return (
      <PostBodyImgContainer>
        <Img src={asset.url} alt={asset.description} />;
      </PostBodyImgContainer>
    );
  }

  return null;
};

const PostBodyImgContainer = styled(ImgContainer)`
  width: 100%;
  height: 500px;
`;

export default PostBodyAsset;
