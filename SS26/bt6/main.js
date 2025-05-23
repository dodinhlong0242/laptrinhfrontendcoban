function formatDates(input) {
    if (!Array.isArray(input)) {
        return "Du lieu khong hop le"; 
    }

    if (input.length === 0) {
        return "Mang khong co phan tu nao"; 
    }

    return input.map(item => {
        let date = new Date(item);
        if (isNaN(date)) {
            return "Du lieu khong hop le";
        }
        let day = String(date.getDate()).padStart(2, '0');
        let month = String(date.getMonth() + 1).padStart(2, '0');
        let year = date.getFullYear();
        alert(`${day}/${month}/${year}`);
    });
}
let input = ["2025-03-10", "2024-12-25", "2023-07-01"];
formatDates(input);
