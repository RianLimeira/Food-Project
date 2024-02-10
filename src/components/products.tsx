import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { forwardRef } from "react";

type ProductsDataProps = {
  title: string;
  description: string;
  thumbnail: ImageProps;
  quantity?: number;
};

type ProductsProps = TouchableOpacityProps & {
  data: ProductsDataProps;
};

export const Products = forwardRef<TouchableOpacity, ProductsProps>(
  ({ data, ...rest }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        className="w-full flex-row items-center pb-8"
        {...rest}
      >
        <Image source={data.thumbnail} className="w-22 h-26 rounded-md" />
        <View className="flex-1 ml-3 -mb-3">
          <View className="flex-row items-center">
            <Text className="text-slate-100 font-subtitle text-base flex-1">
              {data.title}
            </Text>
            {data.quantity && (
              <Text className="text-slate-400 font-subtitle text-sm">
                qtd={data.quantity}
              </Text>
            )}
          </View>

          <Text className="text-slate-400 text-xs leading-5 mt-0.5">
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);
