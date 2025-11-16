import { Body, Controller, Post } from '@nestjs/common';
import { CreateMetaOptionDto } from './dto/create-meta-option.dto';
import { MetaOptionsService } from './meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(private readonly metaOptionsService: MetaOptionsService) {}

  @Post()
  public create(@Body() createPostMetaOptionsDto: CreateMetaOptionDto) {
    const metaOptions = this.metaOptionsService.create(
      createPostMetaOptionsDto,
    );
    return metaOptions;
  }
}
