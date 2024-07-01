"use strict";
/** @format */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class CheckboxService {
    getAllCheckboxes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.checkbox.findMany();
        });
    }
    getCheckboxesByRange(startRow, endRow, startCol, endCol) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.checkbox.findMany({
                where: {
                    row: {
                        gte: startRow,
                        lte: endRow,
                    },
                    col: {
                        gte: startCol,
                        lte: endCol,
                    },
                },
            });
        });
    }
    getCheckboxById(checkboxId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.checkbox.findUnique({
                where: { checkboxId },
            });
        });
    }
    updateCheckboxAndCount(checkboxId, checked, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkbox = yield prisma.checkbox.findUnique({
                where: { checkboxId },
            });
            if (checkbox && checkbox.checked !== checked) {
                yield prisma.checkbox.update({
                    where: { checkboxId },
                    data: {
                        checked,
                        userId,
                    },
                });
                return checked ? 1 : -1;
            }
            return 0;
        });
    }
}
exports.CheckboxService = CheckboxService;
