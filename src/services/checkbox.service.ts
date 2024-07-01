import { PrismaClient, Checkbox } from "@prisma/client";

const prisma = new PrismaClient();

export class CheckboxService {
    async getAllCheckboxes(page: number, limit: number): Promise<{ checkboxes: Checkbox[], total: number }> {
        const [checkboxes, total] = await prisma.$transaction([
            prisma.checkbox.findMany({
                skip: (page - 1) * limit,
                take: limit,
            }),
            prisma.checkbox.count(),
        ]);

        return { checkboxes, total };
    }

    async getCheckboxesByRange(
        startRow: number,
        endRow: number,
        startCol: number,
        endCol: number,
        page: number,
        limit: number
    ): Promise<{ checkboxes: Checkbox[], total: number }> {
        const [checkboxes, total] = await prisma.$transaction([
            prisma.checkbox.findMany({
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
                skip: (page - 1) * limit,
                take: limit,
            }),
            prisma.checkbox.count({
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
            }),
        ]);

        return { checkboxes, total };
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
