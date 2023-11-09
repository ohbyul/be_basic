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
          SELECT tc.COMM_CD 
                ,tc.GROUP_CD 
                ,tc.COMM_CD_NM 
                ,tc.COMM_CD_DESC 
                ,tc.SORT_ORDER 
           FROM TB_CODE tc
          WHERE 1=1
            AND tc.DELETE_YN = 'N'
            AND tc.GROUP_CD = :groupCd
          ORDER BY tc.SORT_ORDER ASC
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
