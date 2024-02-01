import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import { options } from "@/options"

export async function GET() {
  const session = await getServerSession(options)

  // DEBUG: ユーザー情報を出力
  console.log(session?.user)

  return NextResponse.json({ message: "ok" })
}
