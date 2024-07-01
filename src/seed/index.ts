import "dotenv/config";
import { PrismaClient } from '@prisma/client';

interface CheckboxCreateInput {
    checkboxId: string;
    row: number;
    col: number;
    checked: boolean;
    userId?: string | null;
    // other fields as needed
  }

const prisma = new PrismaClient();

async function seedCheckboxes() {
    const checkboxesToCreate: CheckboxCreateInput[] = [];

    // Generate one million checkboxes with random checked states
    for (let i = 1; i <= 1000000; i++) {
        checkboxesToCreate.push({
            checkboxId: `checkbox-${i}`,
            checked: Math.random() < 0.5, // Randomly assign checked state
            row: Math.floor(Math.random() * 100) + 1, // Example: Random row between 1 and 100
            col: Math.floor(Math.random() * 100) + 1, // Example: Random col between 1 and 100
        });
    }

    // Use Prisma transaction to bulk-create checkboxes
    await prisma.checkbox.createMany({
        data: checkboxesToCreate,
    });

    console.log('Checkbox seeding completed.');
}

async function main() {
    await seedCheckboxes();
    await prisma.$disconnect();
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});