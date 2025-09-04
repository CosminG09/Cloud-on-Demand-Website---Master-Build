import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function UiDemoPage() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="font-display text-3xl font-semibold">UI Demo</h1>

      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Quick form</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@company.ro" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="First Last" />
          </div>
          <Button type="button">Submit</Button>
        </CardContent>
      </Card>
    </main>
  );
}
