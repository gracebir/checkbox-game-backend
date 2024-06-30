var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Checkbox_1;
import { Table, Model, Column, DataType, Default, PrimaryKey, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from './User.model';
let Checkbox = Checkbox_1 = class Checkbox extends Model {
    checkboxId;
    row;
    col;
    checked;
    userId;
    user;
    static async updateCheckboxAndCount(checkboxId, checked, userId) {
        const checkbox = await Checkbox_1.findByPk(checkboxId);
        if (checkbox) {
            if (checkbox.checked !== checked) {
                checkbox.checked = checked;
                checkbox.userId = userId;
                await checkbox.save();
                return checked ? 1 : -1; // Increment count if checked, decrement if unchecked
            }
        }
        return 0; // No change in count
    }
    static associate(models) {
        // Define associations here if needed
    }
};
__decorate([
    PrimaryKey,
    Default(DataType.UUIDV4),
    Column(DataType.UUID),
    __metadata("design:type", String)
], Checkbox.prototype, "checkboxId", void 0);
__decorate([
    Column({
        type: DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Checkbox.prototype, "row", void 0);
__decorate([
    Column({
        type: DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Checkbox.prototype, "col", void 0);
__decorate([
    Default(false),
    Column(DataType.BOOLEAN),
    __metadata("design:type", Boolean)
], Checkbox.prototype, "checked", void 0);
__decorate([
    ForeignKey(() => User),
    Column({
        type: DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], Checkbox.prototype, "userId", void 0);
__decorate([
    BelongsTo(() => User),
    __metadata("design:type", User)
], Checkbox.prototype, "user", void 0);
__decorate([
    Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    }),
    __metadata("design:type", Date)
], Checkbox.prototype, "createdAt", void 0);
__decorate([
    Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    }),
    __metadata("design:type", Date)
], Checkbox.prototype, "updatedAt", void 0);
Checkbox = Checkbox_1 = __decorate([
    Table({
        tableName: "Checkboxes",
        timestamps: true,
    })
], Checkbox);
export { Checkbox };
//# sourceMappingURL=CheckboxGame.model.js.map