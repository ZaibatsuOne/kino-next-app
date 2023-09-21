export const getGrowth = (growth: number | undefined) => {
  if (!growth) return <span>-</span>;
  return <span>{growth} см</span>;
};
