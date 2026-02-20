import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Get client IP from headers
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : request.headers.get("x-real-ip");

    if (!ip) {
      return NextResponse.json({ currency: "USD" });
    }

    // Detect country from IP using ipapi.co
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();

    // Return INR for India, USD for others
    const currency = data.country_code === "IN" ? "INR" : "USD";

    return NextResponse.json({ currency });
  } catch (error) {
    // Default to USD on error
    return NextResponse.json({ currency: "USD" });
  }
}
