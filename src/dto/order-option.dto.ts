import { IsEnum } from "class-validator";
export class OrderOptionDto {
    column_name: string;
    orderOption: string;
}

export enum OrderOptionState {
    ASC = 'ASC',
    DESC = 'DESC',
  }