import { Flex } from 'antd';

// TODO: In the future, this component will be used to redirect to the HashTags Analysis page.
const HashTagsRedirect = () => {
  return (
    <Flex
      vertical
      style={{
        margin: 24,
      }}
    >
      <a href="https://app.brandmentions.com/h/p/824129/Olympics">Go to HashTags Analysis</a>
    </Flex>
  );
};

export default HashTagsRedirect;
