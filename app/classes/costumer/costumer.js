// @flow

/** Classe Cliente */
export default class Costumer {
  id: number;

  table: number;

  status: string;

  /**
   * @function constructor
   * @description Construtor da classe cliente. Utilizado para criar novos clientes.
   * @param {number} newId - Id do cliente.
   * @param {number} newTable - Número da mesa do cliente.
   * @param {string} newStatus - Status atual do cliente. podendo ser: Aguardando atendimento, Pedido em andamento, Pedido entregue ou finalizado
   */
  constructor(newId: number, newTable: number, newStatus: string) {
    this.id = newId;
    this.table = newTable;
    this.status = newStatus;
  }

  /**
   * @function GetCostumer
   * @description Retorna as informações do cliente.
   * @return {array} Retorna uma lista com o id, número da mesa e status do cliente, respectivamente.
   */

  /**
   * @function EditTable
   * @description Altera o número da mesa do cliente.
   * @param {number} newTable - Novo número da mesa do cliente.
   */

  /**
   * @function EditStatus
   * @description Altera o status do cliente.
   * @param {string} newStatus - Novo status do cliente.
   */

  GetCostumer(): Array<*> {
    return [this.id, this.table, this.status];
  }

  EditTable(newTable: number) {
    this.table = newTable;
  }

  EditStatus(newStatus: string) {
    this.status = newStatus;
  }
}
