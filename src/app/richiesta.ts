export interface Richiesta{
    id:number,
    idCommessa:number,
    stato:{ id: number },
    statoApprovazione:number,
    dataCreazione:Date,
    note:Text,
    oggetto:string,
    campo1:Text,
    campo2:Text,
    campo3:Text,
    campo4:Text,
    utenteCreazione:string,
    utenteModifica:Text,
    dataInserimento:Date,
    dataModifica:Date
}