import { Repository, EntityRepository } from 'typeorm';

import { Paginable } from 'src/modules/shared/models/paginable';
import { Page } from 'src/modules/shared/models/page';
import { Fiscalia as Fiscalia } from './fiscalia.entity';

@EntityRepository(Fiscalia)
export class FiscaliaRepository extends Repository<Fiscalia> {
  /**
   *
   */
  constructor() {
    super();
  }

  async paginate(paginable: Paginable): Promise<Page<Fiscalia>> {
    const pageSize = Number(paginable.pageSize) || 10;
    const page = Number(paginable.page) || 0;
    const skip = page ? pageSize * (page - 1) : 0;
    const [result, total] = await this.findAndCount({
      order: { id: -1 },
      take: pageSize,
      skip: skip,
    });
    const lastPage = Math.ceil(total / pageSize);
    const firstPage = 1;
    const nextPage = lastPage === page ? lastPage : page + 1;
    const previousPage = firstPage === page ? firstPage : page - 1;
    return {
      content: result,
      page: page ? page : 1,
      pageSize: pageSize,
      total: total,
      firstPage: firstPage,
      previousPage: previousPage,
      nextPage: nextPage,
      lastPage: lastPage,
    } as Page<Fiscalia>;
  }
}
