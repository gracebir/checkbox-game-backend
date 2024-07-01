/** @format */

import { PrismaClient, Checkbox } from "@prisma/client";

const prisma = new PrismaClient();

export class CheckboxService {
    async getAllCheckboxes(): Promise<Checkbox[]> {
        return await prisma.checkbox.findMany();
    }

    async getCheckboxesByRange(
        startRow: number,
        endRow: number,
        startCol: number,
        endCol: number
    ): Promise<Checkbox[]> {
        return await prisma.checkbox.findMany({
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
    }

    async getCheckboxById(checkboxId: string): Promise<Checkbox | null> {
        return await prisma.checkbox.findUnique({
            where: { checkboxId },
        });
    }

    async updateCheckboxAndCount(
        checkboxId: string,
        checked: boolean,
        userId: string
    ): Promise<number> {
        const checkbox = await prisma.checkbox.findUnique({
            where: { checkboxId },
        });
        if (checkbox && checkbox.checked !== checked) {
            await prisma.checkbox.update({
                where: { checkboxId },
                data: {
                    checked,
                    userId,
                },
            });
            return checked ? 1 : -1;
        }
        return 0;
    }
}
