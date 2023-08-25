function showDetails(bundleId) {
  const bundleDetails = document.getElementById(`bundle${bundleId}-details`);
  const sizeLabel = document.getElementById(`size${bundleId}-label`);
  const sizeSelect = document.getElementById(`size${bundleId}`);
  const colorLabel = document.getElementById(`color${bundleId}-label`);
  const colorSelect = document.getElementById(`color${bundleId}`);
  const bundleOption = document.getElementById(`bundle${bundleId}-option`);

  const discountedPrice = document.querySelector(
    `#bundle${bundleId}-label .discounted-price`
  );
  const discountedAmount = document.querySelector(
    `#bundle${bundleId}-label .discounted-amount`
  );
  const mostPopular = document.querySelector(
    `#bundle${bundleId}-label .most-popular`
  );

  if (bundleDetails.style.display === "block") {
    bundleDetails.style.display = "none";
    sizeLabel.style.display = "none";
    sizeSelect.style.display = "none";
    colorLabel.style.display = "none";
    colorSelect.style.display = "none";
    discountedPrice.style.display = "none";
    mostPopular.style.display = "none";
    bundleOption.classList.remove("active-bundle"); // Remove active class
  } else {
    bundleDetails.style.display = "block";
    sizeLabel.style.display = "block";
    sizeSelect.style.display = "block";
    colorLabel.style.display = "block";
    colorSelect.style.display = "block";
    discountedPrice.style.display = "inline";
    mostPopular.style.display = "inline";
    bundleOption.classList.add("active-bundle"); // Add active class
  }
}
