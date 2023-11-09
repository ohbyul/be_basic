import { Injectable, UnauthorizedException,InternalServerErrorException, StreamableFile } from '@nestjs/common';
import { CommonQuery } from './common.queries';

@Injectable()
export class CommonService {
  constructor(
    private commonQuery: CommonQuery,
  ) {}

  /*************************************************
   * 그룹CD별 코드 리스트 조회   
   * 
   * @returns 그룹CD별 코드 리스트
   ************************************************/
  async getCommonCodeList(params : any) {
    let commonCodeList: any = await this.commonQuery.getCommonCodeList({...params});

    if (commonCodeList) {
      return {
        statusCode: 10000,
        message: '정상적으로 조회되었습니다.',
        data: commonCodeList
      };
    } else {
      throw new InternalServerErrorException({
        statusCode: 10002,
      })
    }
  }

} 

