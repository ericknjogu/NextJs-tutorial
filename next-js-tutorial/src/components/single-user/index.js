"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SingleUserCard({ user }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {user?.firstName} {user?.lastName}
        </CardTitle>
        <CardDescription>{user?.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{user?.address}</p>
      </CardContent>
    </Card>
  );
}
