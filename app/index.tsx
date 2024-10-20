import { useEffect, useState } from "react";
import { useRouter, useNavigation } from "expo-router";

export default function Index() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      router.replace("/login");
    }
  }, [isMounted, router]);

  return null;
}
