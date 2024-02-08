import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("");

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);
  }

  return (
    <View className=" flex-1 pt-12">
      <Header title="Faça seu pedido" cartQuantityItems={1} />
      {/* Exemplo de listas: */}
      {/* <CategoryButton title="Lanche do Dia"  />
                <CategoryButton title="Lanche do Dia" isSelected />
                <CategoryButton title="Lanche do Dia" /> */}

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        // Componentes renderizados:
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: "red",
//         flex:1,
//     }
// })
