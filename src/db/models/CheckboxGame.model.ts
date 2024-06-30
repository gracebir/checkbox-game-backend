import { Table, Model, Column, DataType, Default, PrimaryKey, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from './User.model';

@Table({
    tableName: "Checkboxes",
    timestamps: true,
})
export class Checkbox extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    checkboxId!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    row!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    col!: number;

    @Default(false)
    @Column(DataType.BOOLEAN)
    checked!: boolean;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    userId!: number;

    @BelongsTo(() => User)
    user!: User;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    declare createdAt: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    declare updatedAt: Date;

    static async updateCheckboxAndCount(checkboxId: string, checked: boolean, userId: number): Promise<number> {
        const checkbox = await Checkbox.findByPk(checkboxId);
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

    static associate(models: any) {
        // Define associations here if needed
    }
}
