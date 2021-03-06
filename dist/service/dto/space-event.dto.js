"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const base_dto_1 = require("./base.dto");
const mission_dto_1 = require("./mission.dto");
const space_event_type_1 = require("../../domain/enumeration/space-event-type");
/**
 * A SpaceEvent DTO object.
 */
class SpaceEventDTO extends base_dto_1.BaseDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty({ description: 'name field' }),
    __metadata("design:type", String)
], SpaceEventDTO.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty({ description: 'date field' }),
    __metadata("design:type", Object)
], SpaceEventDTO.prototype, "date", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'description field' }),
    __metadata("design:type", Object)
], SpaceEventDTO.prototype, "description", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'photo field' }),
    __metadata("design:type", Object)
], SpaceEventDTO.prototype, "photo", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty({ enum: space_event_type_1.SpaceEventType, description: 'type enum field' }),
    __metadata("design:type", String)
], SpaceEventDTO.prototype, "type", void 0);
__decorate([
    swagger_1.ApiModelProperty({ type: mission_dto_1.MissionDTO, description: 'mission relationship' }),
    __metadata("design:type", mission_dto_1.MissionDTO)
], SpaceEventDTO.prototype, "mission", void 0);
exports.SpaceEventDTO = SpaceEventDTO;
//# sourceMappingURL=space-event.dto.js.map