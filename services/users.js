const XLSX = require("xlsx");

module.exports = {
    getUsers: function(){
        const workbook = XLSX.readFile('./data/users.xlsx');
        return XLSX.utils.sheet_to_json(workbook.Sheets.Sheet1);
    },
    addUser: function(user){
        const workbook = XLSX.readFile('./data/users.xlsx');
        XLSX.utils.sheet_add_aoa(workbook.Sheets.Sheet1, [
            [user.id, user.name, user.email33],
        ], { origin: -1 });
        XLSX.writeFile(workbook, './data/users.xlsx');
    },
    deleteUsers: function(ids){
        const workbook = XLSX.readFile('./data/users.xlsx');
        const rows = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet1);
        for(let i=0; i < rows.length; i++){
            const row = rows[i];
            if(ids.includes(row.id)){
                delete_row(workbook.Sheets.Sheet1, i + 1);
            }
        }
        XLSX.writeFile(workbook, './data/users.xlsx');
    }
}

function ec(r, c){
    return XLSX.utils.encode_cell({r:r,c:c});
}
function delete_row(ws, row_index){
    var variable = XLSX.utils.decode_range(ws["!ref"])
    for(var R = row_index; R < variable.e.r; ++R){
        for(var C = variable.s.c; C <= variable.e.c; ++C){
            ws[ec(R,C)] = ws[ec(R+1,C)];
        }
    }
    variable.e.r--
    ws['!ref'] = XLSX.utils.encode_range(variable.s, variable.e);
}