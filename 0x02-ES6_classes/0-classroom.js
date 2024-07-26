export default class ClassRoom {
    _maxStudentsSize
    constructor(maxStudentsSize) {
        this._maxStudentsSize = maxStudentsSize;
    }
    get _maxStudentsSize() {
        return this._maxStudentsSize;
    }
    set _maxStudentsSize(maxStudentsSize) {
        this._maxStudentsSize = maxStudentsSize;
    }
};
