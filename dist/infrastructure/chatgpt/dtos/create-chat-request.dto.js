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
exports.CreateChatRequestDto = void 0;
const class_validator_1 = require("class-validator");
const chatgpt_constants_1 = require("../constants/chatgpt.constants");
class CreateChatRequestDto {
    prompt;
    model = chatgpt_constants_1.ChatGptModels.GPT_3_5_TURBO;
    temperature = 0.7;
}
exports.CreateChatRequestDto = CreateChatRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateChatRequestDto.prototype, "prompt", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(chatgpt_constants_1.ChatGptModels),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateChatRequestDto.prototype, "model", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(2),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateChatRequestDto.prototype, "temperature", void 0);
//# sourceMappingURL=create-chat-request.dto.js.map