import { View, Text, ScrollView, StyleSheet } from "react-native";

import { getCategoryAttractions } from "../../../data/exploreData";

import SuggestedAttractionCard from "./SuggestedAttractionCard";

const SelectedCategory = ({ category }: any) => {
  const attractions = getCategoryAttractions(category);

  return (
    <View style={{ marginTop: 20 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          // Comprueba si hay algún item en la categoría
          attractions.length > 0 &&
            attractions.map((attraction: any, index: number) => {
              const id = index + 1;

              return (
                <SuggestedAttractionCard
                  key={attraction.id}
                  id={id}
                  title={attraction.title}
                  image={attraction.image}
                  isLast={id === attractions.length}
                />
              );
            })
        }

        {
          // Si no hay ningún item en la categoría, muestra un mensaje
          attractions.length === 0 && (
            <Text style={styles.noItemsText}>
              No hay ningún item en esta categoría
            </Text>
          )
        }
      </ScrollView>
    </View>
  );
};

export default SelectedCategory;

const styles = StyleSheet.create({
  noItemsText: {
    paddingLeft: 16,
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.03,
  },
});