/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  // TODO: Add access control logic - different roles have different access
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
  };
}
