function getEmployeeStatus(status) {
    switch (status) {
        case 'WORKING':
            return 'Đang làm việc';
        case 'ON_LEAVE':
            return 'Đang nghỉ phép';
        case 'RESIGNED':
            return 'Đã nghỉ việc';
        case 'TERMINATED':
            return 'Bị sa thải';
        default:
            return 'Trạng thái không hợp lệ';
    }
}

// Example usage:
const status = 'WORKING';
console.log(getEmployeeStatus(status));