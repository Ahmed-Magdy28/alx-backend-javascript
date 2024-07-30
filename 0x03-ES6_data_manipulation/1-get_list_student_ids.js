function getListStudentIds(obj) {
  if (!Array.isArray(obj)) {
    return [];
  }
  return obj.map((student) => student.id);
}
export default getListStudentIds;
