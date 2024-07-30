function getStudentIdsSum(ListOfObj) {
  if (Array.isArray(ListOfObj)) {
    return ListOfObj.reduce((acc, obj) => acc + obj.id, 0);
  }
  return 0;
}
export default getStudentIdsSum;
