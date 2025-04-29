ALTER TABLE "user" ADD COLUMN "userTime" time NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "userTimestamp" timestamp with time zone NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "userDate" date NOT NULL;--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "a";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "b";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "c";