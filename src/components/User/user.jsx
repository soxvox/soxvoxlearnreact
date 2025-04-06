import { useGetUsersQuery } from "../../redux/services/api";

export const User = ({ id }) => {
  const { data } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id: userId }) => userId === id),
    }),
  });

  if (!data?.name) {
    return null;
  }
  return data.name;
};
