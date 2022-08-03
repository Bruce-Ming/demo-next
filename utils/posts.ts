export function getAllPostIds() {
  // const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  return [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
    {
      params: {
        id: '3',
      },
    },
    {
      params: {
        id: '4',
      },
    },
    {
      params: {
        id: '5',
      },
    },
  ]
  /* return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    }); */
}
