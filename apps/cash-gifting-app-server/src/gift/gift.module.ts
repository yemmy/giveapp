import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GiftModuleBase } from "./base/gift.module.base";
import { GiftService } from "./gift.service";
import { GiftController } from "./gift.controller";
import { GiftResolver } from "./gift.resolver";

@Module({
  imports: [GiftModuleBase, forwardRef(() => AuthModule)],
  controllers: [GiftController],
  providers: [GiftService, GiftResolver],
  exports: [GiftService],
})
export class GiftModule {}
