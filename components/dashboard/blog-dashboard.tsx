import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FileText, MessageCircle, PlusCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const BlogDashboard = () => {
  return (
    <main className="flex-1 p4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-bold text-2xl">Blog Dashboard</h1>
          <p>Manage your contnet and analytics</p>
        </div>
        <Link href={"/dashboard/articles/create"}>
          <Button>
            <PlusCircle className="h-4 w-4" />
            New Articles
          </Button>
        </Link>
      </div>
      {/* Quick stats */}
      <div className="grid md:grid-cols-3 mb-8 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">
              Total Articles
            </CardTitle>
            <FileText className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-sm text-muted-foreground mt-1">
              +5 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">
              Total Comments
            </CardTitle>
            <MessageCircle className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-sm text-muted-foreground mt-1">
              12 awaiting moderation
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">
              Avg Rating Time
            </CardTitle>
            <FileText className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2</div>
            <p className="text-sm text-muted-foreground mt-1">
              +0.6 from last month
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default BlogDashboard;
