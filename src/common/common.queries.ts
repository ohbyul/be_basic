import { Inject, Injectable } from '@nestjs/common';
import { QueryTypes } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { COMMON } from 'src/entitys/common/common.model';
import { InjectModel } from '@nestjs/sequelize';
import { Transaction } from 'sequelize';

@Injectable()
export class CommonQuery {
  constructor(
    @InjectModel(COMMON)
    private CommonModel: typeof COMMON
  ) {}

  /*************************************************
   * 그룹CD별 코드 리스트 조회   
   * 
   * @returns 그룹CD별 코드 리스트
   ************************************************/
  async getCommonCodeList(params : any) {
    let {props , transaction} = params
    let {groupCd} = props
    const resultList: any = await this.CommonModel.sequelize.query(
        `
          SELECT tcc.COMM_CD 
                ,tcc.GROUP_CD 
                ,tcc.COMM_CD_NM 
                ,tcc.COMM_CD_DESC 
                ,tcc.SORT_ORDER 
           FROM TB_COMM_CD tcc
            AND tcc.DELETE_YN = 'N'
            AND tcc.GROUP_CD = :groupCd
          ORDER BY tcc.SORT_ORDER ASC
        `,  
        { 
          replacements: {
            groupCd,
          },
          type: QueryTypes.SELECT, transaction ,
          mapToModel: true,
        },
      );

    return resultList;
  }

}
