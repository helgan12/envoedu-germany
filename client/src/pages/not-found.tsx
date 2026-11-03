import { translateText, translateNode } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import LanguageSwitcher from "@/components/language-switcher";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 — {translateText("Sayfa Bulunamadı")}</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">{translateText("Aradığınız sayfa bulunamadı.")}</p>
          <Link href="/" className="block mt-4 text-primary underline">{translateText("Ana sayfaya dön")}</Link>
          <div className="mt-6 inline-flex rounded-md bg-secondary px-3"><LanguageSwitcher /></div>
        </CardContent>
      </Card>
    </div>
  );
}
